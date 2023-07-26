import { hours,hourly_sales } from "@/data";
export default function ReportTable(props){
    var total_totals=[]
    const rest_of = hourly_sales.map((item, index) => {
        if (index%2==0){
            var cs="bg-green-300"
        }else{
            var cs="bg-green-500"
        }
        var total=0
        item.forEach((elem,ind)=>{
            if(ind==0){
                ""
            }else{
                return(total+=Number(elem))
            }
          })
        total_totals.push(total)    
    
    return(
      <tr key={index} className={cs}>
        <td className="mb-3 border border-black center">{item[0]}</td>
        <td className="mb-3 border border-black center">{item[1]}</td>
        <td className="mb-3 border border-black center">{item[2]}</td>
        <td className="mb-3 border border-black center">{item[3]}</td>
        <td className="mb-3 border border-black center">{item[4]}</td>
        <td className="mb-3 border border-black center">{item[5]}</td>
        <td className="mb-3 border border-black center">{item[6]}</td>
        <td className="mb-3 border border-black center">{item[7]}</td>
        <td className="mb-3 border border-black center">{item[8]}</td>
        <td className="mb-3 border border-black center">{item[9]}</td>
        <td className="mb-3 border border-black center">{item[10]}</td>
        <td className="mb-3 border border-black center">{item[11]}</td>
        <td className="mb-3 border border-black center">{item[12]}</td>
        <td className="mb-3 border border-black center">{item[13]}</td>
        <td className="mb-3 border border-black center">{item[14]}</td>
        <td className="mb-3 border border-black center">{total}</td>
      </tr>
    )});
    var ded=0
    total_totals.forEach((elem,ind)=>(ded+=elem))    
    var totals=[]
    for(let i=1;i<hourly_sales[0].length;i++){
      var foot_total=0
      for(let j=0;j<hourly_sales.length;j++){
        foot_total+=Number(hourly_sales[j][i])
      }
      totals.push(foot_total)
    }
    const foot_tab= totals.map((item,ind)=>(<td key={ind} className="mb-3 border border-black">{item}</td>))
    if (props.data.length > 0){
      return(
      <table className="mb-3 border-2 border-black">
        <thead><tr className="bg-green-700">
          <th>
            Location
          </th>
          <th className="mb-3 border border-black">{hours[0]}</th>
          <th className="mb-3 border border-black">{hours[1]}</th>
          <th className="mb-3 border border-black">{hours[2]}</th>
          <th className="mb-3 border border-black">{hours[3]}</th>
          <th className="mb-3 border border-black">{hours[4]}</th>
          <th className="mb-3 border border-black">{hours[5]}</th>
          <th className="mb-3 border border-black">{hours[6]}</th>
          <th className="mb-3 border border-black">{hours[7]}</th>
          <th className="mb-3 border border-black">{hours[8]}</th>
          <th className="mb-3 border border-black">{hours[9]}</th>
          <th className="mb-3 border border-black">{hours[10]}</th>
          <th className="mb-3 border border-black">{hours[11]}</th>
          <th className="mb-3 border border-black">{hours[12]}</th>
          <th className="mb-3 border border-black">{hours[13]}</th>
          <th className="mb-3 border border-black">Total</th>
        </tr></thead>
        <tbody>{rest_of}</tbody>
        <tfoot>
            <tr key="totals_row" className="bg-green-700">
                <td className="mb-3 border border-black">Totals</td>
                {foot_tab}
                <td>{ded}</td>
                </tr>            
        </tfoot>
      </table>
    )
    }else{
      return(
        <h3>Report Table Coming Soon ...</h3>
      )
    }
}