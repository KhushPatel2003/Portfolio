import colors from '../constants/colors.ts';

const ListSeperator = ({color}) => {
    return (
        <div className='line'>
            <style jsx>{`
            .line {
                width: 100%;
                height: 1px;
                background-color: ${color};
                align-self: center;
                border-radius: 25px
            }
            `}</style>
        </div>
    )
}

export default ListSeperator;