export default function RefundPolicy() {
	return (
		<div className="bg-gray-50 min-h-screen py-16 px-4">
			<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
				{/* Header */}
				<header className="mb-10 text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
						Refund Policy
					</h1>
					<p className="mt-3 text-gray-600">
						Last updated: <span className="font-medium">05-02-2026</span>
					</p>
				</header>

				{/* Intro */}
				<section className="mb-10">
					<p className="text-gray-700 leading-relaxed">
						At <span className="font-semibold">Duteko</span>, we are committed to
						providing a transparent and reliable cross-border delivery
						experience. This Refund Policy outlines the circumstances under
						which refunds may be issued and how refund requests are assessed.
					</p>
				</section>

				{/* Sections */}
				<div className="space-y-10 text-gray-700 leading-relaxed">
					{/* Overview */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							1. Overview
						</h2>
						<p>
							Duteko operates as a marketplace connecting senders with
							independent travellers and delivery partners. Refund decisions
							are based on the stage of the delivery, the nature of the issue,
							and the party responsible.
						</p>
						<p className="mt-2">
							Refunds are <span className="font-semibold">not automatic</span>{" "}
							and are subject to the conditions below.
						</p>
					</section>

					{/* Eligible Refunds */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							2. Eligible Refund Scenarios
						</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								The delivery was accepted but never commenced.
							</li>
							<li>
								The assigned traveller or courier cancelled and no suitable
								replacement was provided.
							</li>
							<li>
								The customer cancelled before the item was handed over.
							</li>
							<li>
								A technical or operational failure on Duteko’s platform
								prevented the service from being completed.
							</li>
						</ul>
						<p className="mt-3 text-sm text-gray-600">
							Administrative or platform fees may be deducted where applicable.
						</p>
					</section>

					{/* Non-Refundable */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							3. Non-Refundable Scenarios
						</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								The item has already been handed over to a traveller or courier.
							</li>
							<li>
								Delays caused by customs, border controls, or regulatory checks.
							</li>
							<li>
								Incorrect or misleading information provided by the customer.
							</li>
							<li>
								Prohibited or restricted items submitted for delivery.
							</li>
							<li>
								Change of mind after the delivery process has started.
							</li>
							<li>
								Events outside Duteko’s control (including strikes, weather,
								or government actions).
							</li>
						</ul>
					</section>

					{/* Partial Refunds */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							4. Partial Refunds
						</h2>
						<p>
							In certain cases, Duteko may issue a partial refund where part of
							the service has already been rendered or non-recoverable costs
							have been incurred.
						</p>
					</section>

					{/* Loss or Damage */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							5. Lost or Damaged Items
						</h2>
						<p>
							Duteko does not physically handle items. Responsibility for loss
							or damage primarily rests with the traveller or courier.
						</p>
						<p className="mt-2">
							Any claims must be reported within{" "}
							<span className="font-semibold">48 hours</span> of the scheduled
							delivery date and may require supporting evidence.
						</p>
					</section>

					{/* Request Process */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							6. Refund Request Process
						</h2>
						<ol className="list-decimal pl-6 space-y-2">
							<li>
								Contact Duteko Support at{" "}
								<span className="font-medium">support@duteko.com</span>
							</li>
							<li>
								Provide your order reference, reason for the request, and any
								supporting documents.
							</li>
							<li>
								Submit your request within{" "}
								<span className="font-semibold">7 days</span> of delivery or
								cancellation.
							</li>
						</ol>
					</section>

					{/* Processing */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							7. Refund Processing Timeline
						</h2>
						<p>
							Approved refunds are processed within{" "}
							<span className="font-semibold">7–14 business days</span> and are
							returned via the original payment method where possible.
						</p>
					</section>

					{/* Currency */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							8. Currency & Fees
						</h2>
						<p>
							Refunds are issued in the original transaction currency. Any
							bank charges, foreign exchange differences, or third-party fees
							are non-refundable.
						</p>
					</section>

					{/* Updates */}
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							9. Policy Updates
						</h2>
						<p>
							Duteko reserves the right to amend this policy at any time.
							Continued use of the platform constitutes acceptance of any
							updates.
						</p>
					</section>

					{/* Contact */}
					<section className="border-t pt-8">
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							10. Contact Us
						</h2>
						<p>
							For questions regarding this Refund Policy, please contact us:
						</p>
						<p className="mt-2">
							📧 <span className="font-medium">support@duteko.com</span>
							<br />
							🌐 <span className="font-medium">https://www.duteko.com</span>
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
