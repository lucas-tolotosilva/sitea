import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PasseioCreate from './PasseioCreate';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-black leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="bg-[#eeeeee]">
                <PasseioCreate />
            </div>

        </AuthenticatedLayout>
    );
}
