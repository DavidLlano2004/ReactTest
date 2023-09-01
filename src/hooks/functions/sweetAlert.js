import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function show_alert(message,icon,focus) {
    const Myswal = withReactContent(Swal)
    Myswal.fire({
        title:message,
        icon:icon
    })
}

function onfocus(focus) {
    if(focus!= ""){
        document.getElementById(focus).focus()
    }
}