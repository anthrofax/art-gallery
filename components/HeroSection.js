import Image from 'next/image';
import ButtonA from '../components/ButtonA';

export default function HeroSection() {
	return (
		<div className='sm:relative lg:flex'>
			<div className='hidden lg:relative lg:block lg:bg-almostBlack lg:w-[990px] lg:h-[800px] lg:bg-desktopHero lg:bg-no-repeat lg:bg-right'>
				<h1 className='absolute top-[189px] left-[165px] mix-blend-exclusion font-black w-screen text-white font-bigShoulder uppercase text-headingXL'>
					Haliza
					<br />
					Art Gallery
				</h1>
			</div>
			<div className='hidden lg:block lg:absolute lg:top-[189px] lg:right-0 lg:mr-16 xl:mr-40'>
				<p className='font-outfit text-darkGray font-light text-bodyM w-[350px] mb-20'>
				Karya-karya seni koleksi Galeri Seni Modern semuanya berawal dari percikan inspirasi. Akankah karya-karya ini menginspirasi Anda? Kunjungi kami dan cari tahu.
				</p>
				<ButtonA path='#main' title='Lihat-lihat yuk!' />
			</div>

			<div className='sm:hidden'>
				<Image
					src='/mobile/image-hero.jpg'
					width={375}
					height={240}
					layout='responsive'
					alt='hero image mobile'
					priority='true'
				/>
			</div>
			<div className='hidden sm:block sm:w-3/5 lg:hidden'>
				<Image
					src='/tablet/image-hero.jpg'
					width={437}
					height={700}
					layout='responsive'
					alt='hero image tablet'
					priority='true'
				/>
			</div>
			<div className='px-4 py-10 sm:absolute sm:top-[145px] sm:left-1/2 lg:static lg:hidden'>
				<h1 className='font-black w-screen text-almostBlack font-bigShoulder uppercase text-headingXM md:text-headingL'>
					Modern
					<br />
					Art Gallery
				</h1>
				<p className='font-outfit text-darkGray font-light text-bodyS py-8 sm:py-12 sm:w-[280px] md:w-[340px]'>
					The arts in the collection of the Modern Art Gallery all started from
					a spark of inspiration. Will these pieces inspire you? Visit us and
					find out.
				</p>
				<ButtonA path='#main' title='Lihat-lihat yuk!' />
			</div>
		</div>
	);
}
