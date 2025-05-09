import Link from "next/link"

const PYQandMoreSection = () => {
  return (
    <div className="px-5 py-10 bg-white dark:bg-black">
      <div className="flex-container2">
        <div>
          <p className="heading text-4xl pb-4 !font-[500]">Previous Years' Questions</p>
          <div>
            <p>
              <Link href="/materials/chapterwise-solved-pyqs" aria-label="View Chapter wise solved previous years' JEE papers">
                <button className="button2">Find out more</button>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-container2">
        <div>
          <p className="heading text-4xl pb-4 !font-[500] !text-black dark:!text-white">More from UNACADEMY</p>
          <div>
            <p>
              <Link href="/more-platforms/unacademy" aria-label="Visit Unacademy for India's largest learning platform">
                <button className="button2">Find out more</button>
              </Link>
            </p>
          </div>
        </div>

        <div>
          <p className="heading text-4xl pb-4 !font-[500] !text-black dark:!text-white">More study materials</p>
          <div>
            <p>
              <Link href="/materials/more-study-materials" aria-label="Explore more study materials">
                <button className="button2">Find out more</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PYQandMoreSection
