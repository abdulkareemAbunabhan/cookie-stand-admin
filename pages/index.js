import { reactStrictMode } from "@/next.config";
import {useEffect, useState } from "react";
import Head from 'next/head';
import Header from '../components/header';
import Form from "@/components/form";
import ReportTable from "@/components/report_table";

export default function Home() {
  const [formData, SetFormData] = useState([]);
  function formHandler(e){
      e.preventDefault()
      const loc=e.target.location.value
      const min=e.target.minimum.value
      const max=e.target.maximum.value
      const ave=e.target.average.value
      SetFormData([loc,min,max,ave])
  }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div className="w-full min-h-screen bg-slate-100">
        {/* {Header} */}
        <Header />
        <main className="flex flex-col items-center mt-8 center">
          {/* {Form} */}
          <Form handler={formHandler} data={formData}/>
          {/* {Result Teble} */}
          
          <h3>{JSON.stringify({'location':formData[0],'Minimum customer per hour':formData[1],'Maximum customer per hour':formData[2],'Average sales per hour':formData[3]})}</h3> 
          <ReportTable data={formData}/>
        </main>
        <footer className="relative bottom-0 w-full space-x-reverse bg-green-500 border-b-8 border-black">&copy; Cookie Stand ltd</footer>
      </div>
    </>
  );
}





