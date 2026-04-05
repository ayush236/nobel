export default function LocationMap() {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-green-900 mb-3 sm:mb-4">Find Us on Map</h3>
      <div className="w-full rounded-xl h-56 sm:h-72 md:h-80 overflow-hidden border-2 border-green-200 shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.2985661386284!2d83.47152770071838!3d27.56639500667439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969b0034422337%3A0xbd25cdb6dea76f44!2sNobel%20environment%20academy%2CTilottama-15%2C%20Kotihawa%2C!5e0!3m2!1sen!2snp!4v1775384833744!5m2!1sen!2snp"
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
