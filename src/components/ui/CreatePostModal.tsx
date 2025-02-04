// import { motion } from 'framer-motion';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/Button";
// import { Input } from "@/components/ui/Input";
// import { Textarea } from "@/components/ui/Textarea";
// import { FaPlus } from 'react-icons/fa';

// export const CreatePostModal: React.FC = () => {

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all">
//           <FaPlus className="text-lg" />
//           <span>Create Post</span>
//         </Button>
//       </DialogTrigger>

//       <DialogContent className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md">
//         <DialogHeader>
//           <DialogTitle >Create a New Post</DialogTitle>
//         </DialogHeader>

//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
          
//           className="flex flex-col space-y-4"
//         >
//           <Input
//             type="text"
//             placeholder="Post Title"
//             value={post.title}
//             required
//           />
//           <Textarea
//             placeholder="Write your post..."
//             value={post.content}
//             rows={4}
//             required
//           />
//           <div className="flex justify-end space-x-3">
//             <Button type="button" variant="secondary">Cancel</Button>
//             <Button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white">Post</Button>
//           </div>
//         </motion.form>
//       </DialogContent>
//     </Dialog>
//   );
// };
