import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// Creo una funcion de show alert para mandarla a llamar en los componentes que sean necesarios
export function show_alert(message,icon) {
    const Myswal = withReactContent(Swal)
    Myswal.fire({
        title:message,
        icon:icon
    })
}