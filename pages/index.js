import { reactStrictMode } from "@/next.config";
import {useEffect, useState } from "react";

export default function Home() {
  const [formData, SetFormData] = useState(["location","minimum customers","maximum customers","average customers"]);
  const [tableData,SetTableData] = useState([])
  function formHandler(e){
      e.preventDefault()
      const loc=e.target.location.value
      const min=e.target.minimum.value
      const max=e.target.maximum.value
      const ave=e.target.average.value
      SetFormData([loc,min,max,ave])
      SetTableData([...tableData,[loc,min,max,ave]])
  }
  return (
    <>
      <head>
        <title>Cookie Stand Admin</title>
      </head>
      <body className="w-full bg-slate-100 min-h-screen">
        {/* {Header} */}
        <Header />
        <main className="flex flex-col items-center center mt-8">
          {/* {Form} */}
          <Form handler={formHandler} data={formData}/>
          {/* {Result Teble} */}
          <Result table={tableData}/>

        </main>
        <footer className="bg-green-500 space-x-reverse border-b-8 border-black w-full relative bottom-0">&copy; Cookie Stand ltd</footer>
      </body>
    </>
  );
}

function Header() {
  return (
    <header className="bg-green-500 items-center justify-between p-4 border-t-8 border-black ">
      <h1 className="text-4xl">Cookie Stand Admin</h1>
    </header>
  );
}

function Form(props) {
  return (
    <form className="bg-green-300 self-center flex flex-col items-center rounded p-4 m-3" onSubmit={props.handler}>
      <h3 className="self-center text-2xl font-semibold m-4">Create Cookie Stand</h3>
      <div>
        <label className="m-2 text-lg font-semibold" htmlFor="location">
          Location
        </label>
        <input className="flex-auto p1-1" name="location" placeholder={props.data[0]}/>
      </div>
      <div className="self-center flex flex-row justify-center">
        <div className="flex flex-col m-2">
          <label className="m-1 text-lg font-semibold" htmlFor="minimum">
            Minimum customer per hour
          </label>
          <input className="flex-auto p1-1" type="number" name="minimum" placeholder={props.data[1]} />
        </div>
        <div className="flex flex-col m-2">
          <label className="m-1 text-lg font-semibold" htmlFor="maximum">
            Maximum customer per hour
          </label>
          <input className="flex-auto p1-1" type="number" name="maximum" placeholder={props.data[2]}/>
        </div>
        <div className="flex flex-col m-2">
          <label className="m-1 text-lg font-semibold" htmlFor="average">
            Average sales per hour
          </label>
          <input className="flex-auto p1-1" type="number" name="average" placeholder={props.data[3]}/>
        </div>
        <div className="m-2">
          <button className="text-4xl p-2 bg-green-400 rounded" type="submit">Create</button>
        </div>
      </div>
    </form>
  );
}

function Result(props){
    const rest_of = props.table.map((item, index) => (
      <tr key={index} >
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
        <td>{item[3]}</td>
      </tr>
    ));
    if (props.table.length > 0 ){
      return(
      <table className="border-2 border-black mb-3">
        <thead><tr>
          <th>
            Location
          </th>
          <th>
            Minimum customers per hour
          </th>
          <th>
            maximum customers per hour
          </th>
          <th>
            average sales per hour
          </th>
        </tr></thead>
        <tbody>{rest_of}</tbody>
      </table>
    )
    }else{
      return(
        <h3>Report Table Coming Soon ...</h3>
      )
    }
}