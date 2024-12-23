import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-customColor3 p-4 border-[#e4f3f7] border-t border-b text-customColor2">
            <ul className="flex flex-col sm:flex-row sm:space-x-8 justify-center font-bold text-sm">
                <li><a className="text-customColor hover:text-customColor" href="/">Home</a></li>
                <li><a className="text-primary hover:text-customColor" href="/">Specx</a></li>
                <li className="relative group">
                    <a className="text-primary hover:text-customColor" href="/">Book An Eye Exam</a>
                    {/* <ul className="absolute hidden group-hover:block bg-white text-primary mt-2 space-y-2 p-2 shadow-lg">
                        <li><a className="block hover:bg-gray-100 p-2" href="/book-an-eye-exam/option1">Option 1</a></li>
                        <li><a className="block hover:bg-gray-100 p-2" href="/book-an-eye-exam/option2">Option 2</a></li>
                        <li><a className="block hover:bg-gray-100 p-2" href="/book-an-eye-exam/option3">Option 3</a></li>
                    </ul> */}
                </li>
                <li><a className="text-primary hover:text-customColor" href="/">Eye XBucks</a></li>
                <li><a className="text-primary hover:text-customColor" href="/">About Us</a></li>
                <li><a className="text-primary hover:text-customColor" href="/">FAQ</a></li>
                <li><a className="text-primary hover:text-customColor" href="/">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;