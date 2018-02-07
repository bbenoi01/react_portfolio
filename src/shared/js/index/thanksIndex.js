import { connect } from 'react-redux';
import Thanks from '../components/thanks';

function mapStoreToProps(store) {
    return {
        firstName: store.contact.firstName,
        lastName: store.contact.lastName,
        email: store.contact.email,
        interested: store.contact.interested
    }
}

export default connect(mapStoreToProps)(Thanks);