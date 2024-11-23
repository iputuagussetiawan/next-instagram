'use client';
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { CloudUploadIcon } from 'lucide-react'
import { updateProfile } from '@/actions';
import { useRouter } from 'next/navigation';
import { Profile } from '@prisma/client';


export function SettingForm({userEmail, profile}:{userEmail:string, profile:Profile}) {
    const router=useRouter();
    return (
        <form action={async(data:FormData)=>{
            await updateProfile(data, userEmail);
            router.push('/profile');
            router.refresh();
        }}>
            <div className="flex gap-4 items-center">
                <div>
                    <div className="bg-gray-200 size-24 rounded-full"></div>
                </div>
                <div>
                    <Button variant='surface'>
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