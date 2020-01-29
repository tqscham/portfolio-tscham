import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faFolderMinus, 
    faSpinner, 
    faCommentMedical,
    faCompass,
    faAt,
    faMobileAlt,
    faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faFolderMinus, 
    faSpinner, 
    faCommentMedical,
    faCompass,
    faAt,
    faMobileAlt,
    faLock);
};

export default Icons;