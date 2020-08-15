const db2 = firebase.firestore()

async function addVC(){
    const title = document.getElementById("title").value
    const value = document.getElementById("value").value
    const release = document.getElementById("release").value
    const launch_price = document.getElementById("launch_price").value
    const microarchitecture = document.getElementById("microarchitecture").value
    const die_size = document.getElementById("die_size").value
    const gpu_name = document.getElementById("gpu_name").value
    const manufacturing_process = document.getElementById("manufacturing_process").value
    const transistors = document.getElementById("transistors").value
    const thermal_design_power = document.getElementById("thermal_design_power").value
    const interface = document.getElementById("interface").value
    const multi_gpu_support = document.getElementById("multi_gpu_support").value
    const maximum_temperature = document.getElementById("maximum_temperature").value
    const base_frequency = document.getElementById("base_frequency").value
    const boost_frequency = document.getElementById("boost_frequency").value
    const shading_units = document.getElementById("shading_units").value
    const rt_cores = document.getElementById("rt_cores").value
    const texture_mapping_units = document.getElementById("texture_mapping_units").value
    const rops = document.getElementById("rops").value
    const pixel_fill_rate = document.getElementById("pixel_fill_rate").value
    const pixel_fill_rate_boost = document.getElementById("pixel_fill_rate_boost").value
    const texture_fill_rate = document.getElementById("texture_fill_rate").value
    const texture_fill_rate_boost = document.getElementById("texture_fill_rate_boost").value
    const memory_type = document.getElementById("memory_type").value
    const memory_size = document.getElementById("memory_size").value
    const memory_speed = document.getElementById("memory_speed").value
    const memory_bus = document.getElementById("memory_bus").value
    const memory_bandwidth = document.getElementById("memory_bandwidth").value
    const directx = document.getElementById("directx").value
    const opengl = document.getElementById("opengl").value
    const opencl = document.getElementById("opencl").value
    const vulkan = document.getElementById("vulkan").value
    const cuda = document.getElementById("cuda").value
    const g3d_mark = document.getElementById("g3d_mark").value
    const date = new Date().toISOString()
await db.collection("processors").add({
    title: title,
    value: value,
	release: release,
	launch_price: launch_price,
    microarchitecture: microarchitecture,
    die_size: die_size,
    gpu_name: gpu_name,
    manufacturing_process: manufacturing_process,
    transistors: transistors,
    thermal_design_power: thermal_design_power,
    interface: interface,
    multi_gpu_support: multi_gpu_support,
    maximum_temperature: maximum_temperature,
    base_frequency: base_frequency,
    boost_frequency: boost_frequency,
    shading_units: shading_units,
    rt_cores: rt_cores,
    texture_mapping_units: texture_mapping_units,
    rops: rops,
    pixel_fill_rate: pixel_fill_rate,
    pixel_fill_rate_boost: pixel_fill_rate_boost,
    texture_fill_rate: texture_fill_rate,
    texture_fill_rate_boost: texture_fill_rate_boost,
    memory_type: memory_type,
    memory_size: memory_size,
    memory_speed: memory_speed,
    memory_bus: memory_bus,
    memory_bandwidth: memory_bandwidth,
    directx: directx,
    opengl: opengl,
    opencl: opencl,
    vulkan: vulkan,
    cuda: cuda,
    g3d_mark: g3d_mark,
	date: date,
  })
}