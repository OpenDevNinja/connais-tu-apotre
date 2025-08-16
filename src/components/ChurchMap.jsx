import { apostleBio } from '../data/apostleData'

export default function ChurchMap() {
    return (
        <div className="mt-8">
            <h3 className="text-xl text-blue-700 text-center font-bold mb-4">Les Eglises de la Mission Chrétienne Rhéma</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {apostleBio.churches.map((church, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-green-700">MCR de {church}</h4>
                        {/* <p className="text-gray-600">{church.location}</p>
                        <p className="text-sm text-gray-500">Fondée en {church.year}</p> */}
                    </div>
                ))}
            </div>
        </div>
    )
}