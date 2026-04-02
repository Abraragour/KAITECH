import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const Projects = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');

  const rawItems = t('projects.items', { returnObjects: true });
  const projectItems = Array.isArray(rawItems) ? rawItems : [];

  const rawFilters = t('projects.filters', { returnObjects: true });
  const filters = (rawFilters && typeof rawFilters === 'object') ? rawFilters : {};

  const filteredProjects = filter === 'all' 
    ? projectItems 
    : projectItems.filter(item => item.category === filter);

  return (
    <section id="projects" className="py-24 bg-white">
     <Helmet>
        <title>
          {isRtl ? 'كايتك | معرض المشاريع - إنجازاتنا' : 'KAITECH | Projects - Our Portfolio'}
        </title>
        <meta name="description" content={t('projects.subtitle')} />
      </Helmet>
     
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF8C00] font-bold tracking-widest uppercase text-sm">{t('projects.title')}</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#001030] mt-4 uppercase">{t('projects.subtitle')}</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {Object.keys(filters).map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-8 py-2 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
                  filter === key ? 'border-[#FF8C00] text-[#FF8C00]' : 'border-transparent text-gray-400 hover:text-[#001030]'
                }`}
              >
                {filters[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] overflow-hidden bg-[#001030]"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#FF8C00] font-bold text-xs uppercase mb-2">{filters[project.category]}</span>
                  <h3 className="text-2xl font-black text-white uppercase leading-tight">{project.title}</h3>
                  <div className="w-12 h-1 bg-[#FF8C00] mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;