import { motion } from 'motion/react';
import { MaterialIcon } from '../ui';

export function ProductMockup() {
  return (
    <div className="relative w-full max-w-xl">
      {/* Main Browser Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Browser Window */}
        <div className="bg-charcoal rounded-2xl shadow-2xl shadow-charcoal/30 overflow-hidden">
          {/* Browser Chrome */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-charcoal border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
            </div>
            <div className="flex-1 flex justify-center px-4">
              <div className="bg-charcoal-light rounded-lg px-4 py-1.5 text-[11px] text-cream/60 flex items-center gap-2 max-w-[240px] w-full">
                <MaterialIcon name="lock" size={12} className="text-green-400" />
                <span className="truncate">stellafashion.com/products/wrap-dress</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
                <MaterialIcon name="refresh" size={14} className="text-cream/40" />
              </div>
            </div>
          </div>

          {/* Store Content */}
          <div className="bg-[#fafaf9]">
            {/* Store Header */}
            <div className="bg-white border-b border-black/5 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-sm text-charcoal tracking-tight">STELLA</span>
                <nav className="hidden sm:flex items-center gap-4 text-[10px] text-charcoal/50">
                  <span>New</span>
                  <span className="text-charcoal font-medium">Dresses</span>
                  <span>Tops</span>
                  <span>Sale</span>
                </nav>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="search" size={16} className="text-charcoal/40" />
                <MaterialIcon name="favorite_border" size={16} className="text-charcoal/40" />
                <div className="relative">
                  <MaterialIcon name="shopping_bag" size={16} className="text-charcoal/40" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-charcoal rounded-full text-[8px] text-cream flex items-center justify-center">2</div>
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="px-4 py-2 text-[9px] text-charcoal/40 flex items-center gap-1">
              <span>Home</span>
              <MaterialIcon name="chevron_right" size={12} />
              <span>Dresses</span>
              <MaterialIcon name="chevron_right" size={12} />
              <span className="text-charcoal/60">Wrap Dress</span>
            </div>

            {/* Product Layout */}
            <div className="px-4 pb-4">
              <div className="flex gap-4">
                {/* Product Images */}
                <div className="flex-shrink-0">
                  {/* Main Image */}
                  <div className="relative w-36 h-44 bg-[#f0efed] rounded-xl overflow-hidden mb-2">
                    <DressPhoto />
                    {/* Genefits Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 15 }}
                      className="absolute top-2 left-2 bg-charcoal text-cream text-[8px] font-bold px-2 py-1 rounded-full flex items-center gap-1"
                    >
                      <MaterialIcon name="auto_awesome" size={10} filled />
                      TRY ON
                    </motion.div>
                  </div>
                  {/* Thumbnails */}
                  <div className="flex gap-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className={`w-8 h-10 rounded-md overflow-hidden ${i === 0 ? 'ring-1 ring-charcoal' : 'opacity-60'}`}
                      >
                        <div className="w-full h-full bg-[#f0efed] flex items-center justify-center">
                          <DressThumbnail variant={i} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0 py-1">
                  {/* Brand & Title */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[9px] text-charcoal/40 uppercase tracking-wider font-medium">Stella Fashion</p>
                      <h3 className="text-sm font-semibold text-charcoal mt-0.5 leading-tight">Floral Wrap Dress</h3>
                      {/* Reviews */}
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[1,2,3,4,5].map((star) => (
                            <MaterialIcon 
                              key={star} 
                              name="star" 
                              size={10} 
                              filled 
                              className={star <= 4 ? "text-yellow-400" : "text-charcoal/20"} 
                            />
                          ))}
                        </div>
                        <span className="text-[9px] text-charcoal/40">4.8 (124)</span>
                      </div>
                    </div>
                    <MaterialIcon name="favorite_border" size={18} className="text-charcoal/30 flex-shrink-0" />
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-lg font-bold text-charcoal">$89</span>
                    <span className="text-xs text-charcoal/40 line-through">$120</span>
                    <span className="text-[9px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">26% OFF</span>
                  </div>

                  {/* Color */}
                  <div className="mt-3">
                    <p className="text-[9px] text-charcoal/50 mb-1.5">Color: <span className="text-charcoal">Ivory Floral</span></p>
                    <div className="flex gap-1.5">
                      {['#f5f0e8', '#2d2d2d', '#8b4513', '#c41e3a'].map((color, i) => (
                        <div 
                          key={color}
                          className={`w-5 h-5 rounded-full ${i === 0 ? 'ring-1 ring-offset-1 ring-charcoal' : ''}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[9px] text-charcoal/50">Size</p>
                      <p className="text-[9px] text-charcoal/50 underline">Size Guide</p>
                    </div>
                    <div className="flex gap-1">
                      {['XS', 'S', 'M', 'L', 'XL'].map((size, i) => (
                        <div 
                          key={size}
                          className={`w-7 h-7 rounded-lg text-[10px] font-medium flex items-center justify-center transition-all ${
                            i === 2 
                              ? 'bg-charcoal text-cream' 
                              : 'bg-white border border-charcoal/10 text-charcoal/70 hover:border-charcoal/30'
                          }`}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 space-y-2">
                    {/* Virtual Try-On Button - The Star */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-gradient-to-r from-charcoal to-charcoal-light text-cream py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-charcoal/20 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     
                      <span className="relative">Virtual Try-On</span>
                      <span className="relative text-[9px] text-cream/60 font-normal ml-1">Powered by Genefits</span>
                    </motion.button>
                    
                    {/* Add to Cart */}
                    <button className="w-full bg-white border border-charcoal/20 text-charcoal py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-2">
                      <MaterialIcon name="shopping_bag" size={14} />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Preview Result */}
        <motion.div
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-8 lg:-left-16 top-1/2 -translate-y-1/2"
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-charcoal/15 p-3 w-32 border border-charcoal/5">
            <div className="bg-gradient-to-b from-[#f5f3ef] to-[#ebe8e2] rounded-xl aspect-[3/4] flex items-center justify-center relative overflow-hidden">
              <TryOnResult />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent" />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[9px] font-medium text-charcoal/60">Your Preview</span>
              <div className="flex items-center gap-0.5 text-green-600">
                <MaterialIcon name="check_circle" size={12} filled />
                <span className="text-[9px] font-medium">Ready</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Camera Trigger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
          className="absolute -right-4 lg:-right-8 top-1/3"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-gold text-charcoal p-3 rounded-2xl shadow-lg shadow-gold/40 cursor-pointer w-10 h-10 flex items-center justify-center"
          >
            <MaterialIcon name="photo_camera" size={22} filled />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle decorative elements */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 right-12 w-2 h-2 bg-gold rounded-full"
      />
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 -left-2 w-1.5 h-1.5 bg-charcoal/20 rounded-full"
      />
    </div>
  );
}

function DressPhoto() {
  return (
    <svg viewBox="0 0 144 176" fill="none" className="w-full h-full">
      {/* Background gradient */}
      <rect width="144" height="176" fill="url(#bgGradient)" />
      
      {/* Dress illustration */}
      <g transform="translate(32, 20)">
        {/* Hanger */}
        <path d="M40 8 L40 0" stroke="#d1d1d1" strokeWidth="2" />
        <path d="M30 8 Q40 2 50 8" stroke="#d1d1d1" strokeWidth="2" fill="none" />
        
        {/* Dress body */}
        <path 
          d="M25 20 Q40 35 55 20 L60 80 Q40 90 20 80 Z" 
          fill="#f5f0e8"
          stroke="#e8e3db"
          strokeWidth="1"
        />
        
        {/* Dress skirt */}
        <path 
          d="M20 80 L10 140 Q40 150 70 140 L60 80 Q40 90 20 80" 
          fill="#f5f0e8"
          stroke="#e8e3db"
          strokeWidth="1"
        />
        
        {/* Wrap detail */}
        <path 
          d="M25 20 Q35 50 25 80" 
          stroke="#e0d8cc"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Floral pattern hints */}
        <circle cx="30" cy="100" r="3" fill="#ddd5c5" opacity="0.5" />
        <circle cx="50" cy="110" r="2.5" fill="#ddd5c5" opacity="0.5" />
        <circle cx="35" cy="125" r="2" fill="#ddd5c5" opacity="0.5" />
        <circle cx="55" cy="90" r="2" fill="#ddd5c5" opacity="0.5" />
      </g>
      
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f3f0" />
          <stop offset="100%" stopColor="#eae7e3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DressThumbnail({ variant }: { variant: number }) {
  const colors = ['#f5f0e8', '#2d2d2d', '#8b6914', '#c41e3a'];
  return (
    <svg viewBox="0 0 32 40" fill="none" className="w-full h-full">
      <path 
        d="M8 8 Q16 14 24 8 L26 32 Q16 36 6 32 Z" 
        fill={colors[variant]}
        opacity="0.6"
      />
    </svg>
  );
}

function TryOnResult() {
  return (
    <svg viewBox="0 0 100 133" fill="none" className="w-16 h-20">
      {/* Person silhouette */}
      <ellipse cx="50" cy="22" rx="14" ry="14" fill="#c4beb4" />
      
      {/* Body with dress overlay */}
      <path 
        d="M30 40 L25 120 Q50 130 75 120 L70 40 Q50 50 30 40" 
        fill="#f5f0e8"
      />
      
      {/* Dress wrap detail */}
      <path 
        d="M35 45 Q45 70 35 95" 
        stroke="#e0d8cc"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Arms */}
      <path d="M30 45 L15 75" stroke="#c4beb4" strokeWidth="8" strokeLinecap="round" />
      <path d="M70 45 L85 75" stroke="#c4beb4" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}
