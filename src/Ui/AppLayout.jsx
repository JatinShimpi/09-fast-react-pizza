import { Outlet } from "react-router-dom"
import CartOverview from "../Features/cart/CartOverview"
import Header from "./Header"

function AppLayout() {
    return (
        <div>
            <Header/>

            <main>
                <h1>
                    Content
                </h1>
                <Outlet/>
            </main>

            <CartOverview>

            </CartOverview>


        </div>
    )
}

export default AppLayout
