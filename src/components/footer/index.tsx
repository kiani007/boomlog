export default function Footer() {
  return (
    <div data-theme="modern" className="font-sans container mx-auto">
        <footer className="py-6 bg-gray-900 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BoomLog. All rights reserved.</p>
        </footer>
    </div>
  )
}

