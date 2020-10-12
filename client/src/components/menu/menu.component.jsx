import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './menu.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/menu/menu.selectors';

// Needs a state of menu items
const Menu = ({ sections }) => {
    return (
        <div className="menu">
            {sections.map(({ id, ...sectionProps }) =>
                // we don't need to pass Id as props
                <MenuItem
                    key={id}
                    {...sectionProps}>
                </MenuItem>
            )}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(Menu);