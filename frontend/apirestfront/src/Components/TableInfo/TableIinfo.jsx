
export default function TableInfo(props){
    return(
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Fecha Nacimiento</td>
                        <td>Pais</td>
                        <td>Actualizar</td>
                        <td>Eliminar</td>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </>
    );
}