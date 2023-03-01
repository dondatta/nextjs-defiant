import { Component, Fragment } from 'react'
import { unstable_getServerSession } from "next-auth/next";
import  Dheader  from "@/components/Dheader";
import Sidebar from "@/components/Sidebar";
import TopCards from '@/components/TopCards';
import BarChart from '@/components/BarChart';
import RecentOrders from '@/components/RecentOrders';

export default async function Dashboard() {
 
  const session = await unstable_getServerSession();

  return (
    

    <>
      <main className="bg-grey-100 min-h-screen">
        <Dheader />
        
         <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      )}
    </main>
     </>
  )
}
