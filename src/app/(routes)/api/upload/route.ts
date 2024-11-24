import { NextResponse, NextRequest } from "next/server";
import { pinata } from "@/config"

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const file: File | null = data.get("file") as unknown as File;
        const uploadData = await pinata.upload.file(file, {
            groupId: '01935b95-ec05-71a7-b1e6-5622abb3cbb2',
        });
        const fileUrl = `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/files/${uploadData.cid}`;
        // const url = await pinata.gateways.createSignedURL({
        //     cid: uploadData.cid,
        //     expires: 3600,
        // });
        return NextResponse.json(fileUrl, { status: 200 });
    } catch (e) {
        console.log(e);
        return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
        );
    }
}