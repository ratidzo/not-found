export default function PageNotFound() {
    return(
        <main>
            <div>
                <p>404</p>
                <h1>Page not found</h1>
                <p>Sorry, we couldn't find the page you're looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm
                    font-semibold text-white shadow-sm hover:bg-indigo-500
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                        Go back home
                    </a>
                    <a href="#" 
                    className="text-sm font-semibold text-gray-900">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
    )
}