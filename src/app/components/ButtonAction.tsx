import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

const ButtonAction = () => {
    return <div>
        <Link href='/edit/1'className="btn mr-2">
            <Pencil />EDIT
        </Link>
        <button className="btn btn-error">
        <Trash />DELETE
        </button>
    </div>
}

export default ButtonAction;