import React from 'react';
import './ContactUs.css';

/* This component renders the contact us information table. Its called from the ContactUs page*/
function ContactTable () {

    return (
        <div className='ctDivTable'>
            <table className='table table-bordered table-light'>
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td>815-519-8328</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>bob.ruzga@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Mailing Address</td>
                        <td>16528 Windsor Way
                            Alva, FL 33920
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )


}

export default ContactTable