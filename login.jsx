
const Login = () => {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
            </div>
          </div>

          <div className="text-center">
            <p className="text-yellow-500 text-2xl leading-none font-pacifico">subways</p>
            <div className="mt-2">
              <span className="block w-40 h-7 shadow-flat text-shadow bg-gray-200 rounded-full mx-auto"></span>
              <div className="relative flex items-center justify-center">
                <div className="absolute top-0 flex justify-center items-center">
                </div>
                {/* <div className="w-32 h-32 rounded-full bg-gray-200"></div> */}
              </div>
            </div>

            <div className="text-black text-lg font-medium mt-8">
              Subway at Setiabudi One
            </div>
            <div className="text-gray-500 text-sm">
              18, Jl. H. R. Rasuna Said No.18, RT.18/RW.2, Kuningan, Karet Kuningan,
              Setiabudi, South Jakarta City, Jakarta 12920 
            </div>
          </div>

          <div className="mt-8 border-b border-gray-500"></div>

          <div className="mb-4 mt-8">
            <img 
            src= "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xa5yq47nn2j-3%3A1927?alt=media&token=32eea38f-a959-4a93-97e3-fb4d55ea2a1f"
            alt="Subway Offer" 
            className="w-full rounded-md"/>
          </div>

          <div className="flex items-center border border-gray-300 rounded-md mb-4 mt-10">
            <div className="bg-yellow-500 text-white p-2 rounded-l-md flex items-center">
              <span className="mr-2">🇮🇩</span> +62
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="flex-1 p-2 outline-none"
            />
          </div>

          <button className="w-full bg-yellow-500 text-white p-2 rounded-md font-medium mt-10"> Lets Go </button>

          <div className="text-center text-gray-500 text-xs mt-4">
            By clicking let’s go, you agree to all applicable{' '}
            <div className="text-yellow-500">Terms of Use and Privacy Policy</div>
          </div>

          <div className="mt-4">
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-3 text-green-500" />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to signup for the free membership program for active mobile number only
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-center ">
                  <input type="checkbox" className="form-checkbox h-4 w-3 text-green-500" />
                  <span className="m-2 text-sm text-gray-600">
                    send me subways news, event, and exclusive offers
                  </span>
              </div>
            </div>
          </div>  
        </div>
      </div>
    );
  };
  
  export default Login;
  