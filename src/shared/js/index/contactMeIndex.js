import { connect } from 'react-redux';
import ContactMe from '../components/contactMe';

function mapStoreToProps(store) {
    return {
        firstName: store.contact.firstName,
        lastName: store.contact.lastName,
        email: store.contact.email,
        interested: store.contact.interested
    }
}

export default connect(mapStoreToProps)(ContactMe);