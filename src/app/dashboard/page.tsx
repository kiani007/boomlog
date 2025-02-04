import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';



export default async function DashboardPage() {

    const { userId } = await auth();
    if (!userId) {
        return redirect('/sign-in')
    }
    const user = await currentUser()
    return (
        <div className="container mx-auto p-4 mt-8">
            <h1 className="text-2xl font-bold mb-4 text-primary">Dashboard</h1>
            <div className="mb-4 space-y-4 border-b border-gray-200 pb-4 shadow-lg p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg">
                <p className='text-lg text-gray-300 justify-end'>User ID: {userId}</p>
                <p className='text-lg text-gray-300 justify-end'>User Name: {user?.fullName}</p>
            </div>
        </div>
    )
}
