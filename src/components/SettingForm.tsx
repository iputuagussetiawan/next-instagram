'use client';
import React, { useEffect } from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { CloudUploadIcon } from 'lucide-react'
import { updateProfile } from '@/actions';
import { useRouter } from 'next/navigation';
import { Profile } from '@prisma/client';


export function SettingForm({userEmail, profile}:{userEmail:string, profile:Profile}) {
    const router=useRouter();
    const fileInputRef=React.useRef<HTMLInputElement>(null);
    const [file, setFile]=React.useState<File|null>(null);
    const [avatarUrl, setAvatarUrl]=React.useState<string|null>(profile.avatar);
    useEffect(()=>{
        if(file){
            const data=new FormData();
            data.set("file", file);
            fetch('/api/upload', {
                method:'POST', 
                body:data
            }).then(response=>{
                response.json().then(fileUrl=>{
                    setAvatarUrl(fileUrl);
                })
            });
        }
    },[file])
    return (
        <form action={async(data:FormData)=>{
            await updateProfile(data, userEmail);
            router.push('/profile');
            router.refresh();
        }}>
            <input type="hidden" name='avatar' value={avatarUrl} />
            <div className="flex gap-4 items-center">
                <div>
                    <div className="bg-gray-200 size-24 rounded-full overflow-hidden aspect-square shadow-md shadow-gray-400">
                        <img src={avatarUrl} alt="avatar"/>
                    </div>
                </div>
                <div>
                    <input type="file" 
                        ref={fileInputRef} 
                        className='hidden'
                        onChange={(e)=>{
                            setFile(e.target.files?.[0] || null);
                        }}
                    />
                    <Button
                        type='button'
                        variant='surface' 
                        onClick={()=>console.log(fileInputRef.current?.click())}>
                        <CloudUploadIcon/>
                        Change Avatar
                    </Button>
                </div>
            </div>
            <p className='mt-2 font-bold'>Username :</p> 
            <TextField.Root 
                defaultValue={profile.username || ''}
                name='username' 
                placeholder='Your Username'
            />
            <p className='mt-2 font-bold'> name :</p> 
            <TextField.Root 
                defaultValue={profile.name || ''}
                name='name' 
                placeholder='John Doe'
            />
            <p className='mt-2 font-bold'>Subtitle :</p> 
            <TextField.Root 
                defaultValue={profile.subtitle || ''}
                name='subtitle'
                placeholder='Graphic Designer'
            />
            <p className='mt-2 font-bold'>Bio : </p>
            <TextArea 
                defaultValue={profile.bio || ''}
                name='bio' 
            />
            <div className="mt-2 flex justify-center">
                <Button variant='solid'>Save Setting</Button>
            </div>
        </form>
    )
}