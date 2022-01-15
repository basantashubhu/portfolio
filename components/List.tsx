const List = ({className, name, children} : {className: string, name: string, children: any}) => {
    return (
        <div className={className}>
            <h3 className={'font-semibold'}>{name} :</h3>
            <div className="flex gap-3 items-center">
                {children}
            </div>
        </div>
    )
}

export default List