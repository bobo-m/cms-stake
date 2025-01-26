import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} My React Website. All Rights
                Reserved.
            </p>
            <p className="text-sm">
                Made with ❤️ using <span className="font-bold">React</span> and{' '}
                <span className="font-bold">Tailwind CSS</span>.
            </p>
        </footer>
    )
}

export default Footer
