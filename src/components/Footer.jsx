

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0 text-center md:text-left">
          
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-black">LUXE STONE</h3>
            <p className="text-sm text-gray-600 mt-1">
              A subsidiary of Tourmaline Mining & Export Pvt. Ltd
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} LUXE STONE Company. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">Jeddah, Kingdom of Saudi Arabia</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
