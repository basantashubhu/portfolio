const Layout = (props : any) => {
    return (
        <div className="h-screen flex gap-10">
            {props.children}
        </div>
    )
}

export default Layout