import todo from "../model/todo";
import dbConnect from "../utils/dbConnect";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function show() {
  dbConnect();
  const todos = await todo.find();

  //Function to delet vendors
  async function deletTodo(data) {
    "use server";
    let id = JSON.parse(data.get("id")?.valueOf());

    await todo.deleteOne({ _id: id });
    redirect("/show");
  }

  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Todos</h1>
      <div>
        <ul className="flex font-bold">
          <li className="flex-1">Venor Names</li>
          <li className="flex-1">Bank Account</li>
          <li className="flex-1">Bank Name</li>
          <li className="flex-1">Address Line One</li>
          <li className="flex-1">Address Line Two</li>
          <li className="flex-1">City</li>
          <li className="flex-1">Country Names</li>
          <li className="flex-1">Zip Code</li>
          <li className="flex-1">Options</li>
        </ul>
        <hr />
        {todos.map((element) => {
          return (
            <>
              <ul className="flex" key={element._id}>
                <li className="flex-1">{element.vendorName}</li>
                <li className="flex-1">{element.bankAccount}</li>
                <li className="flex-1">{element.bankName}</li>
                <li className="flex-1">{element.addressLineOne}</li>
                <li className="flex-1">{element.addressLineTwo}</li>
                <li className="flex-1">{element.city}</li>
                <li className="flex-1">{element.country}</li>
                <li className="flex-1">{element.zipCode}</li>
                <li className="flex-1">
                  <div className="flex">
                    <form action={deletTodo}>
                      <input
                        type="hidden"
                        name="id"
                        id="id"
                        value={JSON.stringify(element._id)}
                      />
                      <button
                        className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer"
                        type="submit"
                      >
                        Delete
                      </button>
                    </form>
                    <Link href={"/edit/" + element._id}>
                      <button className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer">
                        Edit
                      </button>
                    </Link>
                  </div>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </main>
  );
}
