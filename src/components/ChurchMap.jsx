import { apostleBio } from '../data/apostleData'

export default function ChurchMap() {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Carte des églises annexes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {apostleBio.branches.map((church, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-blue-600">{church.name}</h4>
                        <p className="text-gray-600">{church.location}</p>
                        <p className="text-sm text-gray-500">Fondée en {church.year}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}