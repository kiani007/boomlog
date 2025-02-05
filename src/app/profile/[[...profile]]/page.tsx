import { UserProfile } from "@clerk/nextjs"

const Profile = () => {
  return (
    <div className="container mx-auto p-4 mt-8">
        <UserProfile path="/profile" routing="path" /> 
    </div>
  )
}

export default Profile