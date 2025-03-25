import "../../App.css";

function MyToolKit() {
  return (
    <div className=" bg-amber-50 global-padding-t" id="myToolkit">
      <div className="flex gap-5 ">
        <div className="text-justify">
          <h2 className="text-3xl font-bold text-primary-500 global-padding-b">
            My Toolkit 🌸
          </h2>
          <div></div>
        </div>

        <img
          src="../../images/profile.jpg"
          alt="profile"
          className="w-[30%] h-[400px] object-cover rounded-md drop-shadow-md"
        />
      </div>
    </div>
  );
}

export default MyToolKit;
