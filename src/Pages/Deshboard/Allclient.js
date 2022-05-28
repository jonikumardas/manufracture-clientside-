
import ClientEmail from './ClientEmail';
import HooksEmail from './HooksEmail';

const Allclient = () => {
    const [clientEmil] = HooksEmail();

    return (
        <div>
            <h1 className='text-4xl text-center text-amber-500 p-5 font-bold'>My all client here </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>activity</th>
                            <th>Make Admin </th>
                        </tr>
                    </thead>
                    {
                        clientEmil.map((clientEma) => <ClientEmail key={clientEma._id}
                            clientEma={clientEma}
                        ></ClientEmail>)


                    }
                </table>
            </div>
        </div>

    );
};

export default Allclient;

{/* <ClientEmail
                            key={clientEma._id}
                            clientEma={clientEma}
                        ></ClientEmail> */}