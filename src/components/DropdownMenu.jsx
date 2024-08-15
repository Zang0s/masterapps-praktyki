export default function DropdownMenu({ title, items}) {
    return (
      <div className="relative inline-block text-left group">
        <button className="flex items-center hover:text-black">
          {title}
          <img
            src="/../../public/images/icon-arrow-down.svg"
            alt="Arrow"
            className="h-2 w-3 ml-2 transition-transform transform group-hover:rotate-180"
          />
        </button>
  
        <div className="hidden group-hover:block absolute left-0 p-5  w-48 bg-white rounded-2xl shadow-lg z-10">
          <ul>
            {items.map((item, index) => (
              <a href={item.link}><li key={index} className="p-2 hover:bg-gray-100 group-hover:block hover:text-black">
                <img src={item.icon} className="inline-block mr-2" /> {item.name}
              </li></a>
            ))}
          </ul>
        </div>
      </div>
    );
  }
