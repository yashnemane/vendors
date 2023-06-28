import Todos from "./model/todo";
import dbConnect from "./utils/dbConnect";
import { redirect } from "next/navigation";

export default function Home() {

  async function newTodo(data){
    "use server"
    let vendorName = data.get("vendorName")?.valueOf();
    let bankAccount = data.get("bankAccount")?.valueOf();
    let bankName = data.get("bankName")?.valueOf();
    let addressLineOne = data.get("addressLineOne")?.valueOf();
    let addressLineTwo = data.get("addressLineTwo")?.valueOf();
    let city = data.get("city")?.valueOf();
    let country = data.get("country")?.valueOf();
    let zipCode = data.get("zipCode")?.valueOf();
  
    try{
      dbConnect();
      let newTodo = new Todos({vendorName,bankAccount,bankName,addressLineOne,addressLineTwo,city,country,zipCode});
      await newTodo.save()
      console.log(vendorName,bankAccount,bankName,addressLineOne,addressLineTwo,city,country,zipCode)
    }
    catch(error){
      console.error(error);
    }
    redirect('/show');
  }

  return (
    <main className="m-10 apsce-y-5">

      <h1 className="text-x1 font-bold"> Create Vendors </h1>
      <form action={newTodo}>
        <div>
          <label htmlFor='vendorName' className="text-lg">Vendor Name</label>
          <br/>
          <input type="text" name="vendorName" id="vendorName" className='w-[100%] bg-slate-200 h-10 p-3' required></input>
        </div>
        <div>
          <label htmlFor='bankAccount' className="text-lg" >Bank Account No</label>
          <br/>
          <input type="text" name="bankAccount" id="bankAccount" className='w-[100%] bg-slate-200 h-10 p-3' required></input>
        </div>
        <div>
          <label htmlFor='bankName' className="text-lg">Bank Name</label>
          <br/>
          <input type="text" name="bankName" id="bankName" className='w-[100%] bg-slate-200 h-10 p-3' required></input>
        </div>
        <div>
          <label htmlFor='addressLineOne' className="text-lg">Address Line 1</label>
          <br/>
          <input type="text" name="addressLineOne" id="addressLineOne" className='w-[100%] bg-slate-200 h-10 p-3' required></input>
        </div>
        <div>
          <label htmlFor='addressLineTwo' className="text-lg">Address Line 2</label>
          <br/>
          <input type="text" name="addressLineTwo" id="addressLineTwo" className='w-[100%] bg-slate-200 h-10 p-3' required></input>
        </div>
        <div>
          <label htmlFor='city' className="text-lg">City</label>
          <br/>
          <input type="text" name="city" id="city" className='w-[100%] bg-slate-200 h-10 p-3' required></input>
        </div>
        <div>
          <label htmlFor='country' className="text-lg">Country</label>
          <br/>
          <input type="text" name="country" id="country" className='w-[100%] bg-slate-200 h-10 p-3' required></input>
        </div>
        <div>
          <label htmlFor='zipCode' className="text-lg">Zip Code</label>
          <br/>
          <input type="text" name="zipCode" id="zipCode" className='w-[100%] bg-slate-200 h-10 p-3' required></input>
        </div>
        <br/>
        <button type='submit' className='p-3 bg-yellow-400 font-bold hover:bg-orange-500 hover:text-white'>SUBMIT</button>
      </form>

    </main>
  )
}
