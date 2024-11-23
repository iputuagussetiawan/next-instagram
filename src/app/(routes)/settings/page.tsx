import React from 'react'
import { auth } from '@/auth';
import { SettingForm } from '@/components/SettingForm';
import { prisma } from '@/db';

export default async function SettingsPage() {
    const session=await auth()
    if(!session?.user?.email){
        return 'not logged in'
    }
    const profile=await prisma.profile.findFirstOrThrow({
        where:{email:session?.user?.email as string}
    });
    return (
        <div className='max-w-md mx-auto'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Profile Settings</h1>
            <SettingForm 
                profile={profile}
                userEmail={session?.user?.email as string}
            />
        </div>
    )
}
