
import { Button } from '../ui/button' 
import { IoLogOutSharp } from "react-icons/io5";

export function Footer() {
    return (
        <footer className="pt-4 w-full">
            <Button variant='ghost' className=' cursor-pointer flex items-center justify-center gap-2 h-16 w-20'>
                <IoLogOutSharp/>
                Logout
            </Button>
        </footer>
    )
}