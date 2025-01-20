interface ContactsProps {
    theme: string;
  }
  
  export default function Contacts({ theme }: ContactsProps) {
    return (
      <div className={`mt-12 space-y-2 text-sm ${theme === "light" ? "text-gray-700" : "text-gray-400"}`}>
        <p className="font-semibold">80-631 ГДАНЬСК</p>
        <p className="font-semibold">УЛ. ВИЛЬГЕЛЬМА СТРИЖЕВСКОГО 39А/21</p>
        <p className="font-semibold">ДМИТРО ФОМИН</p>
        <p>
          Email:{" "}
          <a href="mailto:fodi85999@gmail.com" className="text-red-600 hover:underline">
            fodi85999@gmail.com
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a href="https://instagram.com/fodifood" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
            fodifood
          </a>
        </p>
      </div>
    );
  }