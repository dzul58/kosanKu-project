const Footer = () => {
  return (
    <>
      <div className="flex flex-col pt-2 bg-gray-700 text-center">
        <div className="flex-grow">{/* Konten halaman utama di sini */}</div>
        <footer className="bg-gray-900 text-white p-4">
          <div className="max-w-screen-xl mx-auto">
            <span className="block text-sm">
              © 2023 <a className="hover:underline">Kosanku</a>. All Rights
              Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
