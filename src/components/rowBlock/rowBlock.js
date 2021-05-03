import { Row } from 'reactstrap';



const RowBlock = ({ left, right }) => {
    return (
        <Row>
            {left}
            {right}
        </Row>
    );
}

export default RowBlock
