
const DummyTable = ({array})=>{
    return(
        <table>
        <tbody>
          <tr>
            {array.map((item)=><td key={item}>{item}</td> )}
          </tr>
        </tbody>
      </table>
    )
}

export default DummyTable;