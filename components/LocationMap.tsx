export default function LocationMap() {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-green-900 mb-3 sm:mb-4">Find Us on Map</h3>
      <div className="w-full rounded-xl h-56 sm:h-72 md:h-80 overflow-hidden border-2 border-green-200 shadow-md">
        <iframe
          src="https://maps.google.com/maps?q=Tilottama-15,Kotihawa,Rupandehi,Nepal&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nobel Environment Academy Location"
        />
      </div>
    </div>
  )
}
