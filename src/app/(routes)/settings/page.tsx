import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { CloudUploadIcon } from 'lucide-react'

export default function SettingsPage() {
    return (
        <div className='max-w-md mx-auto'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Profile Settings</h1>
            <form action="">
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
                <TextField.Root placeholder='Your Username'/>
                <p className='mt-2 font-bold'> name :</p> 
                <TextField.Root placeholder='John Doe'/>
                <p className='mt-2 font-bold'>Subtitle :</p> 
                <TextField.Root placeholder='Graphic Designer'/>
                <p className='mt-2 font-bold'>Bio : </p>
                <TextArea/>
                <div className="mt-2 flex justify-center">
                    <Button variant='solid'>Save Setting</Button>
                </div>
            </form>
        </div>
    )
}
