
const HomePage = (props) => {
    return ( 
        <>
            <div className="flex flex-col">
                <label className="my-2" htmlFor="firstName">نام <span className="text-rose-500">*</span></label>
                <input type="text" name="firstName" id="firstName" required placeholder="لطفا نام را وارد نمایید." />
                <label className="my-2" htmlFor="lastName">نام خانوادگی <span className="text-rose-500">*</span></label>
                <input type="text" name="lastName" id="lastName" required placeholder="لطفا نام خانوادگی را وارد نمایید." />
                <label className="my-2" htmlFor="job">شغل </label>
                <input type="text" name="job" id="job" placeholder="لطفا شغل را وارد نمایید." />
                <label className="my-2" htmlFor="phoneNumber">شماره موبایل <span className="text-rose-500">*</span></label>
                <input type="text" name="phoneNumber" id="phoneNumber" required placeholder="لطفا شماره موبایل را وارد نمایید." />
                <label className="my-2" htmlFor="cellPhone">تلفن ثابت</label>
                <input type="text" name="cellPhone" id="cellPhone" placeholder="لطفا تلفن ثابت را وارد نمایید." />
                <label className="my-2" htmlFor="email">ایمیل </label>
                <input type="text" name="email" id="email" placeholder="لطفا ایمیل را وارد نمایید." />
                <label className="my-2" htmlFor="address">آدرس </label>
                <textarea name="address" id="address" placeholder="لطفا آدرس را وارد نمایید." ></textarea>
                <button>افزودن</button>
            </div>
            <div className="w-full flex flex-col">
  <div className="overflow-x-auto">
    <div className="py-2 inline-block min-w-full ">
      <div className="overflow-hidden rounded-lg">
        <table className="table-auto">
          <thead className="bg-slate-800 text-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-center">
                نام
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-center">
                نام خانوادگی
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-center">
                شغل
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-center">
                شماره موبایل
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-center">
                 تلفن ثابت
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 text-center">
                ایمیل 
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4 w-44 text-center">
                آدرس 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap border">1</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  border">
                Mark
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  border">
                Otto
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  border">
                @mdo
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  border">
                @mdo
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  border">
                    mohseen.ghorbani1985@gmail.com
              </td>
              <td className="text-sm text-gray-900 font-light whitespace-nowrap px-6 py-4 border">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون

              </td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </>
     );
}
 
export default HomePage;