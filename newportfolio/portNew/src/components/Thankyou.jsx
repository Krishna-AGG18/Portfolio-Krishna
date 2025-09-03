import {motion} from "framer-motion"
import { CheckCircle } from 'lucide-react' 

function Thankyou(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="text-green-400 mb-6"
              >
                <CheckCircle size={80} />
              </motion.div>
        
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold mb-2"
              >
                Message Sent!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 max-w-md"
              >
                Thank you for reaching out. I’ll get back to you as soon as possible!
              </motion.p>
        
              <a
                href="/"
                className="mt-8 inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
    )
}

export default Thankyou;