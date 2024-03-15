export default function RationValidateForm(){

	return (

          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action="" className="flex flex-col w-80">
              <div className="mt-10">
                <label
                  htmlFor="ration_card_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your ration card number :
                </label>
                <input
                  type="text"
                  id="ration_card_number"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg  ring-blue-500  border-blue-500 block w-full p-2.5 border-blue-500"
                  required
                />
              </div>

              <button
                type="button"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg  ring-blue-500  border-blue-500 block w-full p-2.5 border-blue-500"
              >
                Send
              </button>
            </form>
          </main>
	
	
	)


}

